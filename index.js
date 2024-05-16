const express = require("express");
const routes = require("./routes/updateHappiness.js", "./routes/updateSadness.js", "./routes/updateFear.js", "./routes/updateAnger.js", "./routes/updateDisgust.js", "./routes/updateSurprise.js", "./routes/updatePositiveEmotions.js", "./routes/updateNegativeEmotions.js", "./routes/feelShame.js", "./routes/feelProud.js", "./routes/feelJealous.js", "./routes/feelIndignation.js", "./routes/feelIndifference.js", "./routes/feelGuilty.js", "./routes/feelEnvy.js", "./routes/feelDisappointment.js", "./routes/feelDespair.js", "./routes/feelDelight.js", "./routes/feelAlarm.js", "./routes/experienceNaturalDisaster.js", "./routes/experienceInjustice.js", "./routes/experienceCrowd.js", "./routes/excitingExperience.js", "./routes/beCriticized.js");
const { swaggerDocs } = require("./swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api-docs/workouts", routes);

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
});
