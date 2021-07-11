import { Link } from "react-router-dom";

const Hero = (props) => {
  const { title, hero, cover, content, page } = props;
  console.log(cover);
  return (
    <div className="relative h-screen  flex justify-center">
      {cover && (
        <div
          className="static w-full h-screen  bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: `url(${cover})`,
          }}
        ></div>
      )}
      {cover ? (
        <div className="absolute h-screen w-full bg-black bg-opacity-75 "></div>
      ) : (
        <div className="absolute h-auto w-full bg-black bg-opacity-75 "></div>
      )}
      {title && (
        <div className="absolute top-48 font-semibold text-white text-7xl">
          {title}
        </div>
      )}
      {content && (
        <div className="absolute top-72 font-medium text-white text-xl">
          {content}
        </div>
      )}
      {hero && (
        <div className="absolute bottom-0">
          <img src={hero} alt="Hero" className="object-center object-cover" />
        </div>
      )}

      {page && (
        <div className="absolute">
          <Link to="/home">Home</Link>
          <div>{">"}</div>
          <div>{props.page}</div>
        </div>
      )}
    </div>
  );
};
export default Hero;
