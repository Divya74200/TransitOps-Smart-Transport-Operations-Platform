const Trip = require("../models/Trip");

// GET All Trips
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find()
      .populate("vehicle")
      .populate("driver");

    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET Trip By ID
exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id)
      .populate("vehicle")
      .populate("driver");

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE Trip
exports.createTrip = async (req, res) => {
  try {
    const {
      tripNumber,
      vehicle,
      driver,
      source,
      destination,
      cargoWeight,
      distance,
      status,
      startDate,
      endDate,
    } = req.body;

    const existingTrip = await Trip.findOne({ tripNumber });

    if (existingTrip) {
      return res.status(400).json({
        message: "Trip Number already exists",
      });
    }

    const trip = await Trip.create({
      tripNumber,
      vehicle,
      driver,
      source,
      destination,
      cargoWeight,
      distance,
      status,
      startDate,
      endDate,
    });

    res.status(201).json({
      success: true,
      message: "Trip Created Successfully",
      trip,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE Trip
exports.updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Trip Updated Successfully",
      trip,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE Trip
exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Trip Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};