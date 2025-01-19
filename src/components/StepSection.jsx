 

const StepSection = () => {
  return (
    <div className="steps-container">
      <div className="step">
        <div className="icon-container red">
          <i className="fas fa-file-alt"></i>
        </div>
        <p>Fill up Application Form</p>
      </div>
      <div className="step">
        <div className="icon-container green">
          <i className="fas fa-money-bill-wave"></i>
        </div>
        <p>Make Online Payment</p>
      </div>
      <div className="step">
        <div className="icon-container orange">
          <i className="fas fa-user-cog"></i>
        </div>
        <p>Executive will Process Application</p>
      </div>
      <div className="step">
        <div className="icon-container gray">
          <i className="fas fa-envelope"></i>
        </div>
        <p>Get Confirm Mail</p>
      </div>
    </div>
  );
};

export default StepSection;
