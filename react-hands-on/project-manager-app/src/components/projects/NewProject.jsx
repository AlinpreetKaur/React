import { useRef } from "react";
import Input from "../common/Input.jsx";
import Modal from "../common/Modal.jsx";

export default function NewProject({onSave,onCancel}) {
    const modalRef = useRef();
    const titleRef = useRef();
    const descrRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const title = titleRef.current.value;
        const descr = descrRef.current.value;
        const dueDate = dueDateRef.current.value;
        if(title.trim()=='' || descr.trim()=='' || dueDate.trim()=='' ){
        modalRef.current.open();
        return;

        }
        onSave({title:title, descr:descr, dueDate:dueDate})
    }
  return (
    <>
    <Modal ref={modalRef} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className="text-stone-400 mb-4" > Value is not given</p>
        <p className="text-stone-400 mb-4" >  Please enter values</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950" onClick={handleSave}>Save</button>
        </li>
      </menu>
      <div>
       <Input  type="text" ref={titleRef} label="Title"/>
       <Input ref={descrRef} label="Descr" textarea/>
       <Input type="date" ref={dueDateRef} label="Due Date"/>
      </div>
      l̥ 
    </div></>
  );
}
