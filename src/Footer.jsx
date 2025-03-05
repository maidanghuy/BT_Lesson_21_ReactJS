export function Footer({ text }) {
  return (
    <>
      <footer className="bg-dark text-center text-white py-3 mt-5">
        <p className="mb-0">Copyright © {text}</p>
      </footer>
    </>
  );
}
