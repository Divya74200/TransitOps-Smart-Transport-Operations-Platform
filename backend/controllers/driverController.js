const Driver = require("../models/Driver");

// GET All Drivers
exports.getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Driver By ID
exports.getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE Driver
exports.createDriver = async (req, res) => {
  try {
    const {
      name,
      licenseNumber,
      licenseExpiry,
      phone,
      status,
    } = req.body;

    const existingDriver = await Driver.findOne({ licenseNumber });

    if (existingDriver) {
      return res.status(400).json({
        message: "License Number already exists",
      });
    }

    const driver = await Driver.create({
      name,
      licenseNumber,
      licenseExpiry,
      phone,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Driver Created Successfully",
      driver,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Driver
exports.updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Driver Updated Successfully",
      driver,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Driver
exports.deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findByIdAndDelete(req.params.id);

    if (!driver) {
      return res.status(404).json({
        message: "Driver not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Driver Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};