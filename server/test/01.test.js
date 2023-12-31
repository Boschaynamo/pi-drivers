const axios = require("axios");
const getDrivers = require("../src/controllers/getDrivers");
//Mock data
const driversMock = [
  {
    id: 1,
    driverRef: "hamilton",
    number: 44,
    code: "HAM",
    name: { forename: "Lewis", surname: "Hamilton" },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
      imageby:
        "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=52060566",
    },
    dob: "1985-01-07",
    nationality: "British",
    url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    teams: "McLaren, Mercedes",
    description:
      "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among many others. He is statistically considered as the most successful driver in Formula One history.",
  },
  {
    id: 2,
    driverRef: "heidfeld",
    number: "\\N",
    code: "HEI",
    name: { forename: "Nick", surname: "Heidfeld" },
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg/330px-Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg",
      imageby:
        "By https://www.flickr.com/photos/69527563@N05/ - https://www.flickr.com/photos/69527563@N05/48242681251/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=80386033",
    },
    dob: "1977-05-10",
    nationality: "German",
    url: "https://en.wikipedia.org/wiki/Nick_Heidfeld",
    teams: "Prost, Sauber, Jordan,Williams,BMW Sauber,Renault",
    description:
      "Nick Lars Heidfeld (born 10 May 1977) is a German professional racing driver. Despite scoring regular podium finishes in 2005 with Williams, and in 2007 and 2008 with BMW Sauber, Heidfeld never won a race after debuting in Formula One in 2000. Heidfeld currently holds two Formula One records; most podium finishes without a Grand Prix win, and the most second-place finishes without a wi. In 2011, Heidfeld raced in Formula One for the Renault team as a replacement for the injured Robert Kubica, his former BMW Sauber teammate,before being replaced by Bruno Senna. He last drove for the Rebellion Racing team in the FIA World Endurance Championship and for Mahindra Racing Formula E Team in Formula E.",
  },
];

//Mock axios
jest.mock("axios");

describe("GET| /drivers", () => {
  it("should return data from the API", async () => {
    //mock axios.get
    axios.get.mockResolvedValueOnce({ data: driversMock });

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getDrivers(req, res);

    //Expect response status to be 200
    expect(res.status).toHaveBeenCalledWith(200);

    //Expect the response to contain the data from the mocked API call
    expect(res.json).toHaveBeenCalledWith(driversMock);
  });

  it("should handle cases when the API call fails", async () => {
    // Mock the axios.get function to simulate a failed API call
    axios.get.mockRejectedValueOnce(new Error("API error"));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getDrivers(req, res);

    // Expect the response status to be 500 (or any other status code you prefer for errors)
    expect(res.status).toHaveBeenCalledWith(500);

    // Expect the response to contain an error message
    expect(res.json).toHaveBeenCalledWith({ error: "API error" });
  });

  it("should put a default image when empty", async () => {
    const updatedDrivers = driversMock.map((driver) => ({ ...driver }));
    // Remove the image.url property for the second driver to simulate an empty URL
    delete updatedDrivers[1].image.url;
    // axios.get.mockResolvedValueOnce({ data: driversMock });
    axios.get.mockResolvedValueOnce({ data: updatedDrivers });

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await getDrivers(req, res);

    //Expect response status to be 200
    expect(res.status).toHaveBeenCalledWith(200);

    const response = res.json.mock.calls[0][0];
    //Expect the response to contain the data from the mocked API call
    expect(
      response.every((item) => item.image && typeof item.image.url === 'string')
    ).toBe(true);
  });
});

describe("GET| /drivers/:idDriver", ()=>{

})
