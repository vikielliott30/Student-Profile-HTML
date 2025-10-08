type TittleButtonProps = {
    onClick: () => void;
    title: string;
};

function TitleButton({ onClick, title }: TittleButtonProps) {
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={onClick}>Click Me!</button>

        </div>
    );
}

export default TitleButton;