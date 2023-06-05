export default function Typewritter(props: { header: string, subHeader: string }) {
    const { header, subHeader } = props;
    return (
        <header className="section__header w-min m-auto" id="home-section-header">
          <div className="typewriter">
            <h1>Hi, my name is Daniel Patton.</h1>
          </div>
          <h2>I build websites and web apps.</h2>
        </header>
    )
}