const Footer = () => {
  return (
    <footer className="bg-black py-2 font-PoppinsLight text-white">
      <p className="container text-center">
        Made with{" "}
        <a
          href="https://react.dev"
          target="_blank"
          className="font-PoppinsBold"
        >
          React
        </a>{" "}
        by <span className="font-PoppinsBold">Taha Amin</span> &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
