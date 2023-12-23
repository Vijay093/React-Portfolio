import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={classes.header}>
      <h1 className={classes.nav_title}>Vijay Kumar M R</h1>
      <nav>
        <ul>
          <li>
            <button className={classes.button}>Resume</button>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
