const FuelLog = require("../models/FuelLog");
const Expense = require("../models/Expense");
const Vehicle = require("../models/Vehicle");
const Trip = require("../models/Trip");

exports.getReports = async (req, res) => {
  try {
    const totalFuelCost = await FuelLog.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$cost" }
        }
      }
    ]);

    const totalExpense = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" }
        }
      }
    ]);

    const totalVehicles = await Vehicle.countDocuments();

    const totalTrips = await Trip.countDocuments();

    res.json({
      totalFuelCost:
        totalFuelCost.length > 0 ? totalFuelCost[0].total : 0,

      totalExpenses:
        totalExpense.length > 0 ? totalExpense[0].total : 0,

      totalVehicles,

      totalTrips
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};