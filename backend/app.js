const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./database/config');

// Memanggil modul model individual dari folder backend/models yang benar
require('./models/Profile');
require('./models/Skill');
require('./models/Experience');
require('./models/Project');
require('./models/Contact');

const profileRoutes = require('./routes/profile');
const skillsRoutes = require('./routes/skills');
const experiencesRoutes = require('./routes/experiences');
const projectsRoutes = require('./routes/projects');
const contactsRoutes = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 3008;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api/profile', profileRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/contacts', contactsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ==========================================
// AUTO-SEEDER JAMINAN JALAN (FIXED PATH)
// ==========================================
const Profile = require('./models/Profile'); 

async function autoSeed() {
  try {
    const profileCount = await Profile.count();
    if (profileCount === 0) {
      await Profile.create({
        name: "Ajeng Sumawi",
        headline: "Fullstack Web Developer & IT Student",
        bio: "Saya adalah seorang mahasiswa Teknik Informatika yang passionate di bidang web development. Saya senang membangun aplikasi yang memberikan solusi nyata bagi pengguna, mulai dari frontend yang menarik hingga backend yang solid."
      });
      console.log("✅ Auto-seed Profile Sukses Masuk Database!");
    }
  } catch (error) {
    console.log("Auto-seed info / sudah terisi:", error.message);
  }
}

sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  autoSeed();
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to sync database:', err);
});