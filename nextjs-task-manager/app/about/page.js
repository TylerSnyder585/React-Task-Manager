export const metadata = {
  title: "About - Task Manager",
  description: "Learn what this small Next.js task manager app is about.",
};

export default function AboutPage() {
  return (
    <section>
      <h1>About</h1>
      <p>
        This app is a simple task manager built with Next.js. You can add,
        complete, and delete tasks, and they stay saved in your browser using
        localStorage.

        This app was built from stater files by Tyler Snyder <a href="mailto:tsnyder7@students.blackhawk.edu">tsnyder7@Students.Blackhawk.edu</a> for BTC's Front End Framework class. This app demonstrates a core understanding of React, along with different loading styles for optimization.
      </p>
    </section>
  );
}