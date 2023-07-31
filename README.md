# Polygon SeaPort - NFT Api ( Search by name ) 
The current project is deployed on The Graph Hosted Service at: <p/>
 https://thegraph.com/hosted-service/subgraph/soliditydrone/opensea-erc721-fetcher <p/>
This project currently relies on Seaport contract v3 and v4 to fetch informations about ERC721s. The Seaport also works with ERC1155, feel free to clone this project and get ERC1155 fetching at work.

## How does it work?
If you need to gather data and you're satisfied with the current version of the api you can just use it out of the box.
This api includes Names and Symbols to be easily searched by Name.

If you need to gather more information (I.E. Metadata, traits) then you should create a new Graph on TheGraph site.
Follow the instructions in their wizard, clone this repository and make your changes to include more specific data when fetching.

## Considerations

This code is typescripted and running since febraury with no downtime due to errors.
Keep in mind that any feature you add has to be stritcly typed and should be tested accordingly as the subgraph MAY stop due to a bug at runtime
Moreover keep in mind that if you want to expand this snippet to a bigger logic, you need to be careful with external reads as reading state of contract at runtime is very resource-expensive on the subgraph. This will eventually reflect on fetching speed the more you read from the chain. 

## Use permission
This code is granted here and therefore can be cloned and improved by anyone. There's no license or limitation of this code, so feel free to make use of it.
Recognition would be nice if you make use of this and appreciate my work !
