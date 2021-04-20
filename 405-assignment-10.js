const express = require("express");
const axios = require("axios");

const fs = require("fs");

const app = express();

app.get('/api/github/:username', (request, response) => {
    //console.log(request.url);

    fs.readFile(`${request.params.username}.txt`, "utf8", (error, data) => {
        if (error) {
            const promise = axios.get(`https://api.github.com/users/${request.params.username}`, {
                headers: {
                    Accept: "application/json",
                }, 
            });

            promise.then((GitHubApiResponse) => {
                //console.log(GitHubApiResponse);
                const reposCount = GitHubApiResponse.data.public_repos;
                fs.writeFile(`${request.params.username}.txt`, reposCount.toString(), (error) => {
                    console.log("The file has been written to.");
                });
                response.json({
                    repoCount: reposCount,
                });
            });
        }
        else {
            response.json({
                repoCount: Number(data),
            });
        }
    });
});

app.listen(8000);