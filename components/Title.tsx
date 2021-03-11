import c from '../utils/c';

const Title = ({
  text,
  heading,
} : {
  text: string,
  heading: 'h1' | 'h2' | 'h3' | 'h4',
}) => {
  const baseStyling = 'font-poppins font-extrabold';
  const renderTitle = () => {
    switch (heading) {
      case 'h1':
        return (
          <h1 className={c(baseStyling)}>{text}</h1>
        );
      case 'h2':
        return (
          <h2 className={c(baseStyling, 'text-3xl')}>{text}</h2>
        );
      case 'h3':
        return (
          <h3 className={c(baseStyling)}>{text}</h3>
        );
      case 'h4':
        return (
          <h4 className={c(baseStyling)}>{text}</h4>
        );
      default:
        return (
          <span className="hidden" />
        );
    }
  };

  const title = (renderTitle());

  return (
    title
  );
};

export default Title;
