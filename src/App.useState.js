// function App() {
//   const [cardText, setCardText] = useState('')
//   const [cards, setCards] = useState([])
//   const [isPrompt, setIsPrompt] = useState(false)

//   return (
//     <div className="App">
//       <main>
//         <pre>{JSON.stringify(cards)}</pre>
//         <CardGroup cards={cards} />
//         <input
//           type="text"
//           value={cardText}
//           onChange={(event) => setCardText(event.target.value)}
//         />
//         <br />
//         <span>
//           <input
//             type="checkbox"
//             value={isPrompt}
//             onClick={() => setIsPrompt(!isPrompt)}
//           />
//           Prompt Card
//         </span>
//         <br />
//         <button
//           onClick={() => {
//             let trimmedText = cardText.trim()
//             if (trimmedText.length > 0) {
//               setCards([
//                 ...cards,
//                 { text: trimmedText, type: isPrompt ? 'black' : 'white' },
//               ])
//               setCardText('')
//             }
//           }}
//         >
//           Add
//         </button>
//       </main>
//     </div>
//   )
// }
