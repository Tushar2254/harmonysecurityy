import './Training.css'

const trainingPrograms = [
  {
    img: 'Gallery/Training1.jpeg',
    alt: 'Emergency Response',
    title: 'Emergency Response',
    description: 'Guards are trained to respond quickly and effectively in any emergency situation, including medical, fire, or security-related crises.'
  },
  {
    img: 'Gallery/fire1.jpg',
    alt: 'Conflict Resolution',
    title: 'Conflict Resolution',
    description: 'Guards learn how to defuse conflicts and de-escalate potentially dangerous situations using effective communication and negotiation skills.'
  },
  {
    img: 'Gallery/CustomerService.jpeg',
    alt: 'Customer Service',
    title: 'Customer Service',
    description: 'Guards are trained to provide excellent customer service, handling all interactions with respect and professionalism, ensuring positive client experiences.'
  },
  {
    img: 'Gallery/fire1.jpg',
    alt: 'Armed Robbery',
    title: 'Armed Robbery',
    description: 'Guards undergo training on how to react and protect themselves and others in the event of an armed robbery, including safety protocols and communication with law enforcement.'
  },
  {
    img: 'Gallery/SuspiciousPackage.jpeg',
    alt: 'Suspicious Packages',
    title: 'Suspicious Packages',
    description: 'Guards are trained to identify and handle suspicious packages and potential threats, ensuring safety without putting anyone at risk.'
  },
  {
    img: 'Gallery/Holding2.jpeg',
    alt: 'Holding Techniques',
    title: 'Holding Techniques',
    description: 'Training on appropriate and safe holding techniques, ensuring that any physical intervention is conducted safely and within legal limits.'
  },
  {
    img: 'Gallery/conflict.jpeg',
    alt: 'Dealing with Aggressive Persons',
    title: 'Dealing with Aggressive Persons',
    description: 'Guards learn strategies to deal with aggressive individuals calmly and safely, reducing the risk of escalation and injury.'
  },
  {
    img: 'Gallery/IncidentReporting.jpeg',
    alt: 'Incident Reporting',
    title: 'Incident Reporting',
    description: 'Guards are trained in proper incident reporting, ensuring that all events are documented accurately for future reference and legal purposes.'
  },
  {
    img: 'Gallery/EqualEmployment.jpeg',
    alt: 'Equal Employment Opportunity',
    title: 'Equal Employment Opportunity - Discrimination',
    description: 'Training on equal employment opportunities ensures guards understand and respect discrimination laws and treat everyone fairly in the workplace.'
  },
  {
    img: 'Gallery/SupervisorTraining.jpeg',
    alt: 'Supervisor Training',
    title: 'Supervisor Training',
    description: 'Supervisors are provided with specialized training to manage teams effectively, ensuring high performance and adherence to company protocols.'
  }
]

function Training() {
  return (
    <>
      <div className="training-page-container">
        {/* Hero Section */}
        <section className="hero" style={{ backgroundImage: "url('Gallery/fire1.jpg')" }}>
          <div className="hero-text">
            <h1>Training &amp; Development for Security Guards</h1>
            <p>
              We provide a comprehensive training program to ensure our guards are well-equipped to handle all
              situations, from emergency responses to conflict resolution, armed robbery scenarios, and beyond. Our
              bi-monthly training sessions are crucial to their development.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="overview">
          <h2>Our Training Programs</h2>
          <p>
            Our guards receive in-depth training on a variety of important topics to ensure they are always prepared,
            whether it's handling emergencies or interacting with clients. Here's a list of the specialized training we
            provide:
          </p>
        </section>

        {/* Training Programs */}
        <section className="training-programs">
          {trainingPrograms.map((program, index) => (
            <div className="training-program" key={index}>
              <img src={program.img} alt={program.alt} className="program-image" />
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Stats */}
        <section className="stats-section">
          <h2>Our Training Success</h2>
          <div className="stats">
            <div className="stat-card">
              <h3>200+</h3>
              <p>Training Hours Every Year</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Staff Retention After Training</p>
            </div>
            <div className="stat-card">
              <h3>30+</h3>
              <p>Successful Drills Every Year</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2>What Our Staff Says</h2>
          <div className="testimonial">
            <p>"The training we receive helps us stay prepared for any situation. It's what makes our team stronger and more confident in our roles."</p>
            <p>- TTT, Security Officer</p>
          </div>
          <div className="testimonial">
            <p>"The mock drills and conflict resolution training have been invaluable. They helped me handle situations I never thought I'd be prepared for."</p>
            <p>- TTTTT, Housekeeping Staff</p>
          </div>
        </section>
      </div>

      {/* Rewards Section */}
      <section className="rewards-section">
        <div className="rewards-header">
          <h2>Rewards &amp; Recognition</h2>
          <p>Celebrating our security team's dedication with quarterly awards!</p>
        </div>
        <div className="rewards-gallery">
          <div className="reward-card">
            <img src="Gallery/Reward1.jpeg" alt="Q1 Award Ceremony" />
            <p>Security Guard Award</p>
          </div>
          <div className="reward-card">
            <img src="Gallery/Reward31.jpeg" alt="Q2 Award Ceremony" />
            <p>HouseKeeping Guard Award</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Training
