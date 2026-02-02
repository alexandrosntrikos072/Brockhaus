import { useState } from "react";
import { db } from "./config/firebase";
import { addDoc, collection } from "firebase/firestore";
export default function App() {
  const [text, setText] = useState('');
  const press = async() => {
    try {
       await addDoc(collection(db, 'Test') ,{
         text: text
       });
    }catch(e) {
       alert(e);
    }
  }

  return (
    <>
       <div className="w-full flex items-center justify-center row gap-12">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
          <div onClick={press}>1</div>
          <div>2</div>
          <div>3</div>
       </div>
    </>
  );
}