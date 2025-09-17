import AddEntry from "./AddEntry";
import EntriesTable from "./EntriesTable";

export default function Home() {
    return (
        <html>
            <body>
                <div>
                    <AddEntry />
                </div>
                <div>
                    <EntriesTable />
                </div>
            </body>
        </html>
    )
}