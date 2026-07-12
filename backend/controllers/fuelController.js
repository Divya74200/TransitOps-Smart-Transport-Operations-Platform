const FuelLog = require("../models/FuelLog");

// GET All Fuel Logs
exports.getFuelLogs = async (req, res) => {
  try {
    const fuelLogs = await FuelLog.find().populate("vehicle");
    res.status(200).json(fuelLogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Fuel Log By ID
exports.getFuelLogById = async (req, res) => {
  try {
    const fuelLog = await FuelLog.findById(req.params.id).populate("vehicle");

    if (!fuelLog) {
      return res.status(404).json({
        message: "Fuel log not found",
      });
    }

    res.status(200).json(fuelLog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE Fuel Log
exports.createFuelLog = async (req, res) => {
  try {
    const fuelLog = await FuelLog.create(req.body);

    res.status(201).json({
      success: true,
      message: "Fuel Log Added Successfully",
      fuelLog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Fuel Log
exports.updateFuelLog = async (req, res) => {
  try {
    const fuelLog = await FuelLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!fuelLog) {
      return res.status(404).json({
        message: "Fuel log not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fuel Log Updated Successfully",
      fuelLog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Fuel Log
exports.deleteFuelLog = async (req, res) => {
  try {
    const fuelLog = await FuelLog.findByIdAndDelete(req.params.id);

    if (!fuelLog) {
      return res.status(404).json({
        message: "Fuel log not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fuel Log Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};