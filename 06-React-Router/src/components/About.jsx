const AboutPage = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hello! I&apos;m Prapti Bishen, a passionate software developer with a
        knack for building scalable web applications and a love for coding. With
        a background in Bachelors of Technology, I bring a unique perspective to
        the tech industry.
      </p>

      <section className="my-story">
        <h2>My Story</h2>
        <p>
          I started my journey in software development 1.5 years ago. Since Jan
          2024, I&apos;ve worked with technologies like React, Next.js, and
          more. I enjoy turning complex problems into simple, beautiful, and
          intuitive designs.
        </p>
      </section>

      <section className="my-skills">
        <h2>Skills</h2>
        <ul>
          <li>React & Redux</li>
          <li>Express</li>
          <li>SQL</li>
          <li>HTML, CSS, & JavaScript</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="my-work">
        <h2>Projects</h2>
        <p>
          Over the years, I&apos;ve had the opportunity to work on various
          projects, ranging from small business websites to large-scale
          enterprise applications. Check out my portfolio to see some of my
          work.
        </p>
      </section>

      <section className="contact-me">
        <h2>Get In Touch</h2>
        <p>
          If you&apos;re interested in working together or just want to say hi,
          feel free to reach out to me!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
