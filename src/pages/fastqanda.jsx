import React, { Component } from "react";
import styles from "../styles/fastqanda.module.scss";
import {
  faLaravel,
  faJsSquare,
  faPhp,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faRobot,
  faDizzy,
  faFrown,
  faPencilAlt,
  faMicrophone,
  faFileAlt,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import CurvedHeader from "../components/curedHeader";
import TechIcon from "../components/techIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FastQandA extends Component {
  state = {};
  data = {
    title: "Fast Q&A",
    subtitle:
      "A web-based e-learning platform aims at providing fast questioning and answering process to enhance in-class interactivity.",
    techIcons: [
      { title: "Laravel", icon: faLaravel },
      { title: "PHP", icon: faPhp },
      { title: "Machine Learning", icon: faRobot },
      { title: "Bootstrap", icon: faBootstrap },
      { title: "jQuery", icon: faJsSquare },
      { title: "MySQL", icon: faDatabase },
    ],
    solutions: [
      {
        title: "Handwritings Recognition",
        description:
          "Our system allows teachers to handwrite the questions and convert it to text by presing a single button. Besides, teachers can ask questions by drawings.",
        icon: faPencilAlt,
        image: require("../assets/img/projects/fastQ&A/Teacher_Ask_Handwritings_with_order.jpg"),
      },
      {
        title: "Voice-to-text Conversion",
        description:
          "Teachers love talking? Talk to our system and we will convert your speech into text.",
        icon: faMicrophone,
        image: require("../assets/img/projects/fastQ&A/Teacher_Ask_VoiceToText.jpg"),
      },
      {
        title: "Autofilling for MC Questions",
        description:
          "We have trained a Naive Bayes Model to classify your question type. If you've provided some choices, our system will automatically fill out the choices for you.",
        icon: faFileAlt,
        image: require("../assets/img/projects/fastQ&A/Teacher_Edit_MC.jpg"),
      },
      {
        title: "Auto Marking and Grade Display",
        description:
          "This function saves teachers time from marking and allow teacher to provide instant feedback to students according to their performance.",
        icon: faUserCheck,
        image: require("../assets/img/projects/fastQ&A/Teacher_View_MC_Marks.png"),
      },
    ],
    students: [
      {
        title: "Drawing Question",
        description:
          "Drawing board is one of our highlight features as students can either handwrite or draw their answers depending on the question.",
        image: require("../assets/img/projects/fastQ&A/Students_Answer_Drawing_Question.JPG"),
      },
      {
        title: "MC Question",
        description:
          "Multiple-choice question is class type of question. Students can complete with just one tap. Our system allows teachers to provide 2-4 choices offering high flexibility!",
        image: require("../assets/img/projects/fastQ&A/Students_Answer_MC_Question.JPG"),
      },
      {
        title: "Text-based Question",
        description:
          "Text-based question allows students to enter a sentence or a phrase for simple and quick answering.",
        image: require("../assets/img/projects/fastQ&A/Students_Answer_Text_Question.JPG"),
      },
    ],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { title, subtitle, techIcons, solutions, students } = this.data;
    return (
      <>
        <div className={`${styles.content}`}>
          <CurvedHeader title={title} subtitle={subtitle} />

          <section className={styles.backgroundInfo}>
            <div className="problem">
              <div className="container">
                <div className="row">
                  <h1 className="col">
                    Problems <FontAwesomeIcon icon={faFrown} />
                  </h1>
                </div>
                <div className="row">
                  <p className="col">
                    The existing learning platforms require teachers to type out
                    the question word by word. It is very{" "}
                    <span className={styles.bold}>slow</span>...
                  </p>
                </div>
                <img src={require("../assets/img/zootopia_typing.gif")} />
              </div>

              <div className="solutions mt-4">
                <div className="container">
                  <div className="row">
                    <h1 className="col">Solutions</h1>
                  </div>
                  <div className="card-deck mt-4 text-center mb-5">
                    {solutions.map((solution, index) => (
                      <TechIcon item={solution} key={`Solution-${index}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.gallery}>
            <h1 className="mx-3 my-5">Teachers</h1>
            {solutions.map((item, index) => (
              <div
                className={`${styles.wrapper} d-flex flex-column flex-lg-row`}
                key={`example-${index}`}
              >
                <div
                  className={
                    index % 2 === 0
                      ? styles.description
                      : `${styles.description} order-lg-1`
                  }
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className={styles.image}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </section>

          <section className={`mt-5 ${styles.StudentAnswers}`}>
            <div className="container">
              <div className="row">
                <h1>Answer Me</h1>
              </div>
              <div className="row">
                <p className="col">
                  Students can answer three types of questions, including
                  drawing questions, multiple-choice questions and text-based
                  questions.{" "}
                </p>
              </div>
            </div>

            <div className="d-flex flex-column flex-lg-row align-items-center">
              {students.map((answer, index) => (
                <div
                  className={`${styles.card} mx-5 my-4 m-lg-3 `}
                  key={`Students-${index}`}
                >
                  <img
                    src={answer.image}
                    className={`${styles.image} img-fluid`}
                    alt={answer.title}
                  />
                  <div className="p-3 text-center">
                    <h2 className="mb-3">{answer.title}</h2>
                    <p>{answer.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="container"></div>
          </section>

          <section className={`container mt-4 pt-3 ${styles.implementation}`}>
            <div className="row align-items-center">
              <div className="col">
                <h3>Implementation</h3>
                <p className="mt-3">
                  This is my Final Year Project (FYP) which is also developed
                  with Laravel because I have been more familiar with it thanks
                  to the previous project. On top of that, this is my first time
                  trying to integrate machine learning model into a web
                  application.
                </p>
              </div>
            </div>
            <div className="card-deck mt-4 text-center mb-5">
              {techIcons.map((techItem, index) => (
                <TechIcon item={techItem} key={`techItem-${index}`} />
              ))}
            </div>
          </section>

          <section className={styles.reflection}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Reflection</h1>
                </div>
                <div className="col-12">
                  <p>
                    Completed this project, I learnt a lot, like collaborating
                    with my friends, developing new features with calling API
                    services and calling machine learning script.{" "}
                  </p>

                  <p>
                    I have encountered quite several problems, for example
                    authenticating users according to their roles, setting up
                    Canvas which allows drawing and calling the script. However,
                    they really horn my problem-solving skills. My groupmate and
                    I were trying hard reading documentation and browsing Stack
                    overflow repeatedly.
                  </p>

                  <p>
                    Besides, I discovered the pros and cons of using a
                    framework. Although you might set up the basic environment
                    quickly with authentication built-in from the framework, you
                    need to browse a lot of documentation to see how to edit
                    those built-in functions.
                  </p>

                  <p>
                    To sum up, this project offered me a memorable experience in
                    my university life and I am ready to embrace new challenges
                    in the future.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default FastQandA;
