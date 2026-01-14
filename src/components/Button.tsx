interface ButtonProps {
  className: string;
  id: string;
  text: string;
}

const Button = ({ className, id, text }: ButtonProps) => {
  return (
    <div className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Button;
