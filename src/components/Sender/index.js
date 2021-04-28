import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Sender = ({ onAddMessage }) => {
    const [value, setValue] = useState("");

    const onChange = (event) => setValue(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
    
        onAddMessage({
            id: Date.now(),
            avatar: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg",
            message: value,
            date: new Date().toISOString(),
            is: "my",
            status: "sended",
        });
        setValue("");
    };

    return (
        <form className="sender" onSubmit={onSubmit}>
            <input
                placeholder="Type your message"
                value={value}
                onChange={onChange}
                required
            />
            <button>Send</button>
        </form>
    );
};

Sender.propTypes = {
    onAddMessage: PropTypes.func.isRequired,
};

export default Sender;