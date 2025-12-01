// app/week-2/student-info.js
import Link from 'next/link';

export default function StudentInfo() {
  // Replace 'Your Name' and 'YOUR_GITHUB_URL' with your actual information
  const studentName = "Yashneet Kaur";
  const githubRepoUrl = "YOUR_Ghttps://github.com/yashneetkaur-15ITHUB_URL"; 

  return (
    <div>
      <p>Student Name: **{studentName}**</p>
      <p>
        GitHub Repository: 
        <Link href={githubRepoUrl} target="_blank">
          {githubRepoUrl}
        </Link>
      </p>
    </div>
  );
}