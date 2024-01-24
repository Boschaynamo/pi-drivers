//Datbase test needs this
const { Sequelize } = require("sequelize");
const createDriverModel = require("../src/models/Driver");

const mockDriver = {
  id: 5,
  name: "Manuelita",
  apellido: "ViviaEn",
  descripcion: "Pehuajo",
  imagen: "PeroUnDia",
  nacionalidad: "SeMarcho",
  fechadenacimiento: "1998-01-05",
};

describe("Database test", () => {
  let sequelize;
  let Driver;

  beforeAll(async () => {
    // Connect to an in-memory SQLite database for testing
    sequelize = new Sequelize({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "admin",
      database: "drivers",
    });

    Driver = createDriverModel(sequelize);

    // Synchronize the database to create the Driver table
    await sequelize.sync();
  });

  afterAll(async () => {
    // Close the database connection after all tests
    await Driver.destroy({ where: { name: mockDriver.name } });
    await sequelize.close();
  });

  beforeEach(async () => {
    // Clear the Driver table before each test
    await Driver.destroy({ where: { name: mockDriver.name } });
  });

  describe("Driver model and creation", () => {
    it("should create a new driver", async () => {
      const driver = await Driver.create(mockDriver);

      // Retrieve the driver from the database
      const fetchedDriver = await Driver.findOne({
        where: { name: mockDriver.name },
      });

      // Assertions
      expect(driver.name).toBe(mockDriver.name);
      expect(driver.apellido).toBe(mockDriver.apellido);
      expect(driver.descripcion).toBe(mockDriver.descripcion);
      expect(driver.imagen).toBe(mockDriver.imagen);
      expect(driver.nacionalidad).toBe(mockDriver.nacionalidad);
      expect(driver.fechadenacimiento).toBe(mockDriver.fechadenacimiento);
      // Add other assertions for properties as needed
      
      // Additional assertions if needed
      expect(fetchedDriver.name).toBe(mockDriver.name);
      expect(fetchedDriver.apellido).toBe(mockDriver.apellido);
      expect(fetchedDriver.descripcion).toBe(mockDriver.descripcion);
      expect(fetchedDriver.imagen).toBe(mockDriver.imagen);
      expect(fetchedDriver.nacionalidad).toBe(mockDriver.nacionalidad);
      expect(fetchedDriver.fechadenacimiento).toBe(mockDriver.fechadenacimiento);
      // Add other assertions for properties as needed
    });
  });
});
