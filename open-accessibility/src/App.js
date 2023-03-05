import logo from './logo.svg';
import './App.css';
import SquareButton from "./components/square-button";
import TestingForm from "./components/testing_form";
import { sendMsg } from "./util/tabMessaging";
import { useState } from "react";

function App() {
  const [dyslexiaFonts, setDyslexiaFonts] = useState(false);
  const [fontSize, setFontSize] = useState({ current: -1, options: [-1, 0, 1, 2] });
  const [desaturate, setDesaturate] = useState({ current: -1, options: [-1, 0] });
  const [screenReader, setScreenReader] = useState(false);
  const [wordSpacing, setWordSpacing] = useState({ current: -1, options: [-1, 0, 1] });
  const [lineHeight, setLineHeight] = useState({ current: -1, options: [-1, 0, 1, 2] });
  const [largeCursor, setLargeCursor] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [dyslexiaRuler, setDyslexiaRuler] = useState(false);
  const [imageCaptioning, setImageCaptioning] = useState(false);
  const [emphasizeLinks, setEmphasizeLinks] = useState(false);

  return (
    <div className="App">
      <header className="App-header text-white font-medium">
        <h1 className="text-sm p-2">Open Accessibility</h1>

        <div className="bg-white p-4 w-full min-h-screen rounded-t-2xl grid gap-4 grid-cols-2 grid-rows-6">
          <SquareButton
            text="Dylexia Fonts"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-file-font mx-auto mt-4" viewBox="0 0 16 16">
                <path d="M10.943 4H5.057L5 6h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v6.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V4.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
            }
            onClick={() => {
              setDyslexiaFonts(!dyslexiaFonts);
              sendMsg({ action: "DYSLEXIA_FONTS", value: dyslexiaFonts });
            }}
            enabledState={dyslexiaFonts}
          />

          <SquareButton text="Font Size" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-type mx-auto mt-4" viewBox="0 0 16 16">
            <path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z" />
          </svg>}
            onClick={() => {
              // Set the current word spacing to the next one in the array
              let newCurrent = fontSize.current;

              if (newCurrent >= fontSize.options[fontSize.options.length - 1]) {
                newCurrent = -1;
              } else {
                newCurrent++;
              }

              setFontSize({ current: newCurrent, options: fontSize.options });
              sendMsg({ action: "FONT_SIZE", value: fontSize.current });
            }}
            enabledState={fontSize.current}
          />

          <SquareButton
            text="Desaturate"
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
            onClick={() => {
              setDesaturate(!desaturate);
              sendMsg({ action: "DESATURATE", value: desaturate });
            }}
            enabledState={desaturate}
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
            onClick={() => {
              setScreenReader(!screenReader);
              sendMsg({ action: "SCREEN_READER", value: screenReader });
            }}
            enabledState={screenReader}
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
              // Set the current word spacing to the next one in the array
              let newCurrent = wordSpacing.current;

              if (newCurrent >= wordSpacing.options[wordSpacing.options.length - 1]) {
                newCurrent = -1;
              } else {
                newCurrent++;
              }

              setWordSpacing({ current: newCurrent, options: wordSpacing.options });
              sendMsg({ action: "WORD_SPACING", value: wordSpacing.current });
            }}
            enabledState={wordSpacing.current}
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
            onClick={() => {
              // Set the current word spacing to the next one in the array
              let newCurrent = lineHeight.current;

              if (newCurrent >= lineHeight.options[lineHeight.options.length - 1]) {
                newCurrent = -1;
              } else {
                newCurrent++;
              }

              setLineHeight({ current: newCurrent, options: lineHeight.options });
              sendMsg({ action: "LINE_HEIGHT", value: lineHeight.current });
            }}
            enabledState={lineHeight.current}
          />

          <SquareButton text="Large Cursor" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-hand-index mx-auto mt-4" viewBox="0 0 16 16">
            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
          </svg>}
            onClick={() => {
              setLargeCursor(!largeCursor);
              sendMsg({ action: "LARGE_CURSOR", value: largeCursor });
            }}
            enabledState={largeCursor}
          />

          <SquareButton text="Reading Guide" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-book-half mx-auto mt-4" viewBox="0 0 16 16">
            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>}
            onClick={() => {
              setReadingGuide(!readingGuide);
              sendMsg({ action: "READING_GUIDE", value: readingGuide });
            }}
            enabledState={readingGuide}
          />

          <SquareButton text="Dyslexia Ruler" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-rulers mx-auto mt-4" viewBox="0 0 16 16">
            <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
          </svg>}
            onClick={() => {
              setDyslexiaRuler(!dyslexiaRuler);
              sendMsg({ action: "DYSLEXIA_RULER", value: dyslexiaRuler });
            }}
            enabledState={dyslexiaRuler}
          />

          <SquareButton text="Image Captioning" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-image mx-auto mt-4" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>}
            onClick={() => {
              setImageCaptioning(!imageCaptioning);
              sendMsg({ action: "IMAGE_CAPTIONING", value: imageCaptioning });
            }}
            enabledState={imageCaptioning}
          />

          <SquareButton text="Emphasize Links" icon={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-link-45deg mx-auto mt-4" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
          </svg>}
            onClick={() => {
              setEmphasizeLinks(!emphasizeLinks);
              sendMsg({ action: "EMPHASIZE_LINKS", value: emphasizeLinks });
            }}
            enabledState={emphasizeLinks}
          />

          <TestingForm></TestingForm>

        </div>
      </header >
    </div >
  );
}

export default App;
