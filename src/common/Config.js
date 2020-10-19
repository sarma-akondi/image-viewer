var Config = {
    "credentials": {
        "username": "upgrad",
        "password": "upgrad"
    },
    "authentication": {
        "access-token": "IGQVJYdTNibWQ1a1ZAvU0Vwb1dLT0llWVFZAdDFvMzlxTUNNVVZAOS09kTm1nRy1CdXp5TW96eklRaEtQRjMwY2ZAHX1VtdHFaVEVmdnpOUTNIOTUxYUNibF9OVF9FRFo3QXJnTi10SHNR"
    },
    "api":
    {
        "mock": false,
        "endpoints":
            [
                {
                    "name": "Get Posts",
                    "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
                },
                {
                    "name": "Get Post Details",
                    "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
                }
            ]
    }
};
export default Config;