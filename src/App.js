import NoteList from "./components/NoteList";


function App() {
  return (
    <section>
      <form>
        <input type='text' placeholder='Title' />
        <textarea placeholder='write your note...'></textarea>
        <button>create note</button>
      </form>
      <NoteList />
    </section>
  );
}

export default App;
