const File = require("../models/file_model");

module.exports = {

    /**
   * @route   POST api/upload
   * @desc    upload CSV data
   * @access  Public
   */
   saveData: async(req, res) => {
        try{

        const fileData = req.body.fileData;

        const newFile = new File();
        newFile.fileData = req.body.fileData;
        console.log("From API " + fileData);

        const savedFile = await newFile.save();
        if (!savedFile) throw Error("CSV data not saved in the file"); 


        res.status(200).json({
            data: savedFile,
            status: 'OK',
            message: 'File data Saved',
          });
        }catch(error){
          console.log(error.message);
            res.status(405).json({
            status: 'NOT OK',
            message: error.message,
        });
        }
   }
}