import Layout, { siteTitle } from "../components/layout";
import { FormGroup, InputGroup, TextArea, Button } from "@blueprintjs/core";

export default function Contact() {
    return (
        <div>
            <Layout home>
                <h1>Contact</h1>
                <FormGroup
                    label="Name"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <InputGroup id="text-input" placeholder="Bob Smith" />
                </FormGroup>
                <FormGroup
                    label="Message"
                    labelFor="text-input"
                    labelInfo="(required)"
                >
                    <InputGroup
                        id="text-input"
                        placeholder="Nice site brother"
                    />
                </FormGroup>
                <a><Button icon="send-message">Send</Button></a>{ ' ' }<a href="../"><Button icon="home" className="bp3-intent-danger">Home</Button></a>
            </Layout>
        </div>
    );
}
