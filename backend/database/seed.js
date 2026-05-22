const sequelize = require('./config');
const Profile = require('../models/Profile');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Project = require('../models/Project');

async function seed() {
  await sequelize.sync({ force: true });
  console.log('Tables created.');

  await Profile.create({
    name: 'Ajeng Sumawi',
    headline: 'Fullstack Web Developer',
    bio: 'Saya adalah mahasiswa Teknik Informatika yang passionate di bidang web development. Saya senang membangun aplikasi yang memberikan solusi nyata bagi pengguna, mulai dari frontend yang menarik hingga backend yang solid. Selalu antusias untuk belajar teknologi baru dan berkolaborasi dalam tim.',
    photo_url: 'https://ui-avatars.com/api/?name=Nama+Lengkap&size=300&background=6366f1&color=fff&bold=true',
    email: 'ajengsumawi077@gmail.com',
    phone: '+62 88214081357',
    location: 'Bogor, Indonesia',
    cv_url: '#',
    github_url: 'https://github.com/username',
    linkedin_url: 'https://linkedin.com/in/username',
    instagram_url: 'https://instagram.com/username',
  });

  const skills = [
    { name: 'Ms.office', category: 'Language', icon: 'JS', level: 85 },
    { name: 'Keyboarding Skill', category: 'Language', icon: 'HTML', level: 90 },
    { name: 'Layanan Pengguna', category: 'Framework', icon: 'Vue', level: 80 },
    { name: 'Negoisasi Skill', category: 'Framework', icon: 'EX', level: 78 },
    { name: 'Capcut', category: 'Tools', icon: 'Git', level: 80 },
    { name: 'Canva', category: 'Soft Skill', icon: 'PS', level: 85 }
  ];
  await Skill.bulkCreate(skills);

  const experiences = [
    {
      company: 'PT Teknologi Nusantara',
      position: 'Frontend Developer Intern',
      start_date: 'Jan 2025',
      end_date: 'Sekarang',
      is_current: true,
      description: 'Mengembangkan antarmuka menggunakan Vue.js dan Tailwind CSS serta integrasi API.'
    },
    {
      company: 'Himpunan Mahasiswa Teknik Informatika',
      position: 'Divisi IT & Multimedia',
      start_date: 'Mar 2024',
      end_date: 'Des 2024',
      is_current: false,
      description: 'Mengelola website organisasi dan membuat media publikasi kegiatan.'
    }
  ];
  await Experience.bulkCreate(experiences);

  const projects = [
    {
      name: 'Personal Portfolio Website',
      description: 'Website portfolio pribadi dengan data dinamis dari backend Express dan database SQLite.',
      image_url: 'https://placehold.co/600x400/6366f1/ffffff?text=Portfolio+Website',
      tech_stack: 'Vue.js,Express.js,SQLite,Tailwind CSS',
      demo_url: '#',
      github_url: 'https://github.com/username/portfolio',
      category: 'Web'
    },
    {
      name: 'Task Manager App',
      description: 'Aplikasi manajemen tugas sederhana dengan fitur CRUD dan filter status.',
      image_url: 'https://placehold.co/600x400/f59e0b/ffffff?text=Task+Manager',
      tech_stack: 'Vue.js,Express.js,SQLite',
      demo_url: '#',
      github_url: 'https://github.com/username/task-manager',
      category: 'Web'
    }
  ];
  await Project.bulkCreate(projects);

  console.log('Seed data inserted successfully!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});