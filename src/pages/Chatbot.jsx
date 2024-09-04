import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";

import { SiDocusign } from "react-icons/si";
import { InfinitySpin } from "react-loader-spinner";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
// const pdf = require('')

const Resume = () => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const docs = [
    // { uri: "https://url-to-my-pdf.pdf" }, // Remote file
    { uri: require("../assets/resume.pdf") }, // Local File
  ];

  const askQuestion = async () => {
    console.log(question);
    setLoading(true);
    if (question === "") {
      setAnswer("Please enter a question");
      setLoading(false);
      return;
    }
    console.log(process.env.REACT_APP_CLOUDFLARE_ACCOUNT_ID);
    const ACC_ID = process.env.REACT_APP_CLOUDFLARE_ACCOUNT_ID;
    const AUTH_TOKEN = process.env.REACT_APP_CLOUDFLARE_AUTH_TOKEN;
    const MODEL_NAME = process.env.REACT_APP_CLOUDFLARE_MODEL_FOR_CHAT;
    console.log(AUTH_TOKEN, ACC_ID, MODEL_NAME);
    // return;

    const headers = {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": [
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "OPTIONS",
      ],
      "Access-Control-Allow-Headers": ["Content-Type", "Authorization"],
    };

    const url = `https://api.cloudflare.com/client/v4/accounts/${ACC_ID}/ai/run/${MODEL_NAME}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are the assistant of Manash Anand",
            },
            { role: "user", content: question },
          ],
        }),
      });

      if (!response.ok) {
        setAnswer(
          "Sorry, I am not able to answer that question. \n Manash would be able to help you with that at anandmanash321@gmail.com ."
        );
        setLoading(false);
      }

      const data = await response.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setAnswer(
        "Sorry, I am not able to answer that question. \n Manash would be able to help you with that at anandmanash321@gmail.com ."
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid className="project-section">
        <Particle />
        <Container style={{ minHeight: "70vh" }}>
          <h1 className="project-heading">
            Manash  <strong className="yellow">Resume </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here my Resume <SiDocusign /> .
          </p>
          <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            theme={{
              primary: "#5296d8",
              secondary: "#ffffff",
              tertiary: "#5296d899",
              textPrimary: "#ffffff",
              textSecondary: "#5296d8",
              textTertiary: "#00000099",
              disableThemeScrollbar: false,
            }}
          />
          {/* <div class="input-group mb-3" style={{ display: "flex", gap: 2 }}>
            <span
              class="input-group-text"
              id="basic-addon1"
              style={{ backgroundColor: "transparent", border: "0px " }}
            >
              <SiProbot style={{ color: "#7500fa", fontSize: "2rem" }} />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your question"
              aria-label="question"
              aria-describedby="basic-addon1"
              style={{ marginRight: "10px" }}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              type="button"
              class="btn btn-primary"
              style={{ color: "white" }}
              onClick={askQuestion}
            >
              {loading ? (
                <div style={{ color: "#fff" }}>Loading...</div>
              ) : (
                <div style={{ color: "#fff" }}>Ask</div>
              )}
            </button>
          </div> */}
        </Container>
      </Container>
    </>
  );
};

export default Resume;
