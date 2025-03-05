export function Banner() {
  return (
    <>
      <header
        className="container text-dark text-center mt-5 py-5"
        style={{ maxWidth: 1220 + "px", backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h1>A Warm Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            felis eget nunc lobortis fermentum.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </header>
    </>
  );
}
