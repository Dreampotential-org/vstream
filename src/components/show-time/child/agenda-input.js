function AgendaInput({ index, agendaInput }) {
  return (
    <>
      <div className="col-3">
        <input
          id="time"
          name={index}
          type="text"
          placeholder="Select Time"
          onChange={(e) => agendaInput(e.target.id, e.target.name)}
          // value="Dream Potential Conference Series"
          className="form-control"
        />
      </div>
      <div className="col-4">
        <input
          id="agenda"
          name={index}
          type="text"
          placeholder="Agenda"
          onChange={(e) => agendaInput(e.target.id, e.target.name)}
          // value="Gain Next Level Insights To Accelerate your learning"
          className="form-control"
        />
      </div>
      <div className="col-4">
        <input
          id="description"
          name={index}
          type="text"
          placeholder="Add Description"
          onChange={(e) => agendaInput(e.target.id, e.target.name)}
          // value="Gain Next Level Insights To Accelerate your learning"
          className="form-control"
        />
      </div>
    </>
  );
}

export default AgendaInput;
