const File = require("../models/file_model");
var {PythonShell} = require('python-shell');
const  spawn  = require('child_process').spawn;




module.exports = {

    /**
   * @route   POST api/upload
   * @desc    upload CSV data
   * @access  Public
   */
   saveData: async(req, res) => {
        try{

        const fileData = req.body.fileData;

       let c = await File.countDocuments();
       console.log(c);
       c += 1;

        const newFile = new File();
        newFile.fileId = c.toString();
        newFile.fileData = req.body.fileData;

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
    },

   /**
   * @route   POST api/view
   * @desc    upload CSV data
   * @access  Public
   */

   
   viewData: async(req, res) => {
    try{
     const searchTxt = req.body.searchTxt;
     console.log("from view query: " + searchTxt);

      const fileId = await File.count();
      console.log(fileId);
      const file = await File.findOne({ fileId });

      const fileData = file.fileData;
      console.log("filedata is : " + fileData);
     const pythonProcess = spawn('python',["algo.py", searchTxt, fileData]);

     pythonProcess.stdout.on('data', (data) => {
      // Do something with the data returned from python script
      console.log(data);
  });


  //  let options = {
    //    mode: 'text',
    //    //pythonPath: '../../assets/algo.py',
    //    pythonOptions: ['-u'], // get print results in real-time
    //    scriptPath: '',
    //    args: [fileData]
    //  };
     
    //  PythonShell.run('algo.py', options, function (err, results) {
    //    if (err) throw err;
    //    // results is an array consisting of messages collected during execution
    //    console.log('result after search: ', result.toString()); 
    //    res.send(result.toString()) 
      
    //  });

    }catch(error) {
     console.log(error.message);
     res.status(405).json({
     status: 'NOT OK',
     message: error.message,
    });
    }
  },
}