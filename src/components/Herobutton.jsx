export default function Herobutton({ link, style, text }) {
    return(
        <a className={`border-2 ${style}`} href={`# ${link}`}>{text}</a>
    );
}