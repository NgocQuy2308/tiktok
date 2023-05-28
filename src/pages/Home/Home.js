import { useEffect, useState } from 'react';
import * as videoContent from '~/services/video';
import Content from '~/layouts/components/Content/Content';

function Home() {
    const [videoValue, setVideoValue] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoContent.video();
            setVideoValue(result);
        };
        fetchApi();
    }, []);

    return (
        <div>
            {videoValue.map((result) => (
                <Content key={result.id} data={result} meta={result.meta} user={result.user} />
            ))}
        </div>
    );
}

export default Home;
