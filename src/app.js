const express = require("express");
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose") 
const port = process.env.PORT || 4000;

const app = express();
console.log(__dirname) ;
app.set("views", path.join(__dirname, "/../templates/views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "/../templates/views/partials"));
app.use(express.static(path.join(__dirname, "/../public")));


// db connection 

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://nepalsss008:fOFqQmSY4kXrwBDC@cluster0.ifwhhah.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

async function connection(){
  await mongoose.connect(uri);
  console.log("connected sucessfully ") ;
}

try{
  connection() ;
} catch (error) { 
  console.log(error)
}


const shecode = require("./models/shecode");
const Codered = require("./models/codered");
const ProjectJupitor = require("./models/projectJupitor");
const Flash500 = require("./models/flash500");
const Imaginate = require("./models/imaginate");
const Arcade = require("./models/arcade");
const ClashRoyal = require("./models/clashroyals");
const BGMI = require("./models/bgmi");
const PlacementApti = require("./models/placementApti")
const TechStorm = require("./models/techstorm")
const IdeaPresentation = require("./models/ideaPresentation");
const Photography = require("./models/photography");
const MovieMaking = require("./models/movieMaking");
const SchoolModelMaking = require("./models/schoolModelMaking")

// Coding events  
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.get("/shecode" ,(req,res) =>{
  res.render("shecode");
}) 
app.post('/shecode', async (req, res) => {
  const registrationData = req.body;
  console.log(req.body);
  try {
    const { name } = req.body;
    const user = await shecode.create(registrationData);
    console.log(name)
    console.log("passed");
    res.json({ status: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: Registration failed');
  }
});




app.get('/codered', (req, res) => {
  res.render('codered'); 
});


app.post('/codered', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new Codered(registrationData);
  const validationError = newRegistration.validateSync();
  if (validationError) {
      return res.render('codered-registration', { error: validationError.errors, formData: registrationData });
  }
  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});


// Machine Learning  

// Get method to render the registration form
app.get('/projectjupitor', (req, res) => {
  res.render('projectJupitor'); // Render the HTML form
});

// Post method to handle form submission
app.post('/projectjupitor', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new ProjectJupitor(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('projectJupitor', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});




// Get method to render the registration form
app.get('/flash500', (req, res) => {
  res.render('flash500'); // Render the HTML form
});

// Post method to handle form submission
app.post('/flash500', async (req, res) => {
  const registrationData = req.body; 
  const newRegistration = new Flash500(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();
 
  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('flash500', { error: validationError.errors, formData: registrationData });
  }   

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});





// Gdxr evetns 

// Get method to render the registration form
app.get('/imaginate', (req, res) => {
  res.render('imaginate'); // Render the HTML form
});

// Post method to handle form submission
app.post('/imaginate', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new Imaginate(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {  
      // Validation failed, render the form again with error messages
      return res.render('imaginate', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }  
});




// Get method to render the registration form
app.get('/arcade', (req, res) => {
  res.render('arcade'); // Render the HTML form
});

// Post method to handle form submission
app.post('/arcade', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new Arcade(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('arcade', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});



//  Gaming Events 




// Get method to render the registration form
app.get('/clashroyals', (req, res) => {
  res.render('clashroyals'); // Render the HTML form
});

// Post method to handle form submission
app.post('/clashroyals', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new ClashRoyal(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync(); 

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('clashroyals', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});



// Get method to render the registration form
app.get('/bgmi', (req, res) => {
  res.render('bgmi'); // Render the HTML form
});

// Post method to handle form submission
app.post('/bgmi', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new BGMI(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('bgmi', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});

// Get method to render the registration form
app.get('/placement-apti', (req, res) => {
  res.render('placementApti'); // Render the HTML form
});

// Post method to handle form submission
app.post('/placement-apti', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new PlacementApti(registrationData);

  // Validate the data 
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('placementApti', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});



// Get method to render the registration form
app.get('/tech-storm', (req, res) => {
  res.render('techstorm'); // Render the HTML form
});

// Post method to handle form submission
app.post('/tech-storm', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new TechStorm(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('techstorm', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});






// Get method to render the registration form
app.get('/idea-presentation', (req, res) => {
  res.render('ideapresentation'); // Render the HTML form
});

// Post method to handle form submission
app.post('/idea-presentation', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new IdeaPresentation(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('ideapresentation', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});




// Get method to render the registration form
app.get('/photography', (req, res) => {
  res.render('photography'); // Render the HTML form
});

// Post method to handle form submission
app.post('/photography', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new Photography(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('photography', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});





// Get method to render the registration form
app.get('/movie-making', (req, res) => {
  res.render('moviemaking'); // Render the HTML form
});

// Post method to handle form submission
app.post('/movie-making', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new MovieMaking(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('moviemaking', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});




// Get method to render the registration form
app.get('/school-model-making', (req, res) => {
  res.render('schoolmodelmaking'); // Render the HTML form
});

// Post method to handle form submission
app.post('/school-model-making', async (req, res) => {
  const registrationData = req.body;
  const newRegistration = new SchoolModelMaking(registrationData);

  // Validate the data
  const validationError = newRegistration.validateSync();

  if (validationError) {
      // Validation failed, render the form again with error messages
      return res.render('schoolmodelmaking', { error: validationError.errors, formData: registrationData });
  }

  try {
      await newRegistration.save();
      res.send('Registration successful');
  } catch (err) {
      console.error(err);
      res.status(500).send('Error: Registration failed');
  }
});







app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
