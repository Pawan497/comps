import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: "124",
            label: 'can I use React on a project',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: "aada",
            label: 'can I use Javascript on a project',
            content: 'You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want.'
        },
        {
            id: "a3ddf",
            label: 'can I use CSS on a project',
            content: 'You can use CSS on any project you want. You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want.'
        }
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
        );
}

export default AccordionPage;