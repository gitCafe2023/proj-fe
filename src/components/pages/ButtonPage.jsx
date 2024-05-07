import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import styles from './ButtonPage.module.scss';
function ButtonPage() {

    return (<>
        <Navigation />
        <div className={styles.container}>
            <h1>Button Page</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Default</td>
                        <td>
                            <Button>Button</Button>
                        </td>
                        <td>
                            <Button>Button <i className="fa fa-chevron-down"></i></Button>
                        </td>
                        <td>
                            <Button> Dropdown <i className="fa fa-chevron-down"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Primary</td>
                        <td>
                            <Button type="primary">Button</Button>
                        </td>
                        <td>
                            <Button type="primary"><i className="fa fa-save"></i> Button</Button>
                        </td>
                        <td>
                            <Button type="primary"> Dropdown <i className="fa fa-chevron-down fa-xs"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Secondary</td>
                        <td>
                            <Button type="secondary">Button</Button>
                        </td>
                        <td>
                            <Button type="secondary"><i className="fa fa-undo"></i> Button</Button>
                        </td>
                        <td>
                            <Button type="secondary"> Dropdown <i className="fa fa-chevron-down"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Success</td>
                        <td>
                            <Button type="success">Button</Button>
                        </td>
                        <td>
                            <Button type="success"><i className="fa fa-check"></i> Button</Button>
                        </td>
                        <td>
                            <Button type="success"> Dropdown <i className="fa fa-chevron-down"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Warning</td>
                        <td>
                            <Button type="warning">Button</Button>
                        </td>
                        <td>
                            <Button type="warning"><i className="fa fa-arrow-alt-circle-right"></i> Button </Button>
                        </td>
                        <td>
                            <Button type="warning"> Dropdown <i className="fa fa-chevron-down"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Error</td>
                        <td>
                            <Button type="error">Button</Button>
                        </td>
                        <td>
                            <Button type="error"><i className="fa fa-trash"></i> Button</Button>
                        </td>
                        <td>
                            <Button type="error"> Dropdown <i className="fa fa-chevron-down"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Error</td>
                        <td>
                            <Button type="gray">Button</Button>
                        </td>
                        <td>
                            <Button type="gray"><i className="fa fa-plus"></i> Button</Button>
                        </td>
                        <td>
                            <Button type="gray"> Dropdown <i className="fa fa-chevron-down"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Underlined</td>
                        <td>
                            <Button type="underlined">Button</Button>
                        </td>
                        <td>
                            <Button type="underlined">Button <i className="fa fa-chevron-down"></i></Button>
                        </td>
                        <td>
                            <Button type="underlined"> Dropdown <i className="fa fa-chevron-down"></i></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <Button>Apply</Button>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button> */}
        </div>
    </>)
}

export default ButtonPage;