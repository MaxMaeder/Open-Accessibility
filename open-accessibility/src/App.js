import logo from './logo.svg';
import './App.css';
import SquareButton from "./components/square-button";
import Dropdown from "./components/dropdown";
import TestingForm from "./components/testing_form";
import { sendMsg } from "./util/tabMessaging";
import { useState } from "react";

function App() {
  const [contrast, setContrast] = useState(false);
  const [fontSize, setFontSize] = useState(false);
  const [colorBlindness, setColorBlindness] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [wordSpacing, setWordSpacing] = useState(false);
  const [lineSpacing, setLineSpacing] = useState(false);
  const [animation, setAnimation] = useState(false);

  return (
    <div className="App">
      <header className="App-header text-white font-medium">
        <h1 className="text-sm p-2">Open Accessibility</h1>

        <div className="bg-white p-4 w-full min-h-screen rounded-t-2xl grid gap-4 grid-cols-2 grid-rows-6">
          <SquareButton
            text="Contrast"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-square-half mx-auto mt-4"
                viewBox="0 0 16 16"
              >
                <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z" />
              </svg>
            }
          />

          <SquareButton text="Font Size" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-type mx-auto mt-4" viewBox="0 0 16 16">
            <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z" />
          </svg>} />

          <Dropdown></Dropdown>

          <SquareButton
            text="Color Blindness"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-palette-fill mx-auto mt-4"
                viewBox="0 0 16 16"
              >
                <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            }
          />

          <SquareButton
            text="Screen Reader"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-volume-up mx-auto mt-4"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5z" />
                <path d="M9.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5z" />
                <path d="M12.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5z" />
                <path d="M13.5 2a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 5.5 2h8zm-8 1A.5.5 0 0 0 5 3.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5h-1zm8 0a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5h-1z" />
              </svg>
            }
          />

          <SquareButton
            text="Word Spacing"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-distribute-horizontal mx-auto mt-4"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5zm-13 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
                />
                <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z" />
              </svg>
            }
            onClick={() => {
              setWordSpacing(!wordSpacing);
              sendMsg({ action: "WORD_SPACING", value: wordSpacing });
            }}
          />

          <SquareButton
            text="Line Height"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                class="bi bi-distribute-vertical mx-auto mt-4"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"
                />
                <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" />
              </svg>
            }
          />

          <SquareButton text="Animation" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-alarm mx-auto mt-4" viewBox="0 0 16 16">
            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
          </svg>} />

          <TestingForm></TestingForm>

        </div>
      </header>
    </div>
  );
}

export default App;
