const Batch = require('../models/Batch');
const Student = require('../models/Student');

exports.getStudentsByBatch = async (req, res) => {
  const { batchName } = req.params;

  try {
    const students = await Student.find({ batch: batchName });
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.registerStudent = async (req, res) => {
  const { name, email, phone, dob, batch, gender } = req.body;

  try {
    // Create new student
    const newStudent = new Student({
      name,
      email,
      phone,
      dob,
      batch,
      gender,
    });

    await newStudent.save();

    // Update the corresponding batch data
    const updatedBatch = await Batch.findOneAndUpdate(
      { title: batch },
      { $push: { students: newStudent._id } },
      { new: true }
    );

    res.json({ message: 'Student registered successfully', batch: updatedBatch });
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
