import Config from "../Config"
import {Client ,ID,Database,Storage ,Query} from "aapwrite";

export class Service {
    client =new Client();
    databases;
    bucket;
    constructor(){
            this.client
                .setEndpoint(Config.appwriteURl)
                .setProject(appwriteProjectId);
            this.databases =new Database(this.client);
            this,bucket=new Storage(this.client);
            
        }

        async createPost({title,slug,content,featuredimage,status,userid}){
            try {
                return await this.databases.createDocument(
                    Config.appwriteDatabaseId,
                    Config.appwriteCollectionId,
                    slug,
                    //document id alt
                    {
                        title,
                        content,
                        featuredimage,
                        status,
                        userid
                    }
                )
                
            } catch (error) {
                console.log("Appwrite service ::createPost ::error",error);
            }

        }
        async updatePost({title,slug,content,featuredimage,status,userid}){
            try {
                return await this.databases.updateDocument(
                    Config.appwriteDatabaseId,
                    Config.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredimage,
                        status

                    }
                )
            } catch (error) {
                console.log("appwrite service ::createPost ::error",error);
                
            }
        }

        async deletePost(slug){
            try {
                await this.databases.deleteDocument(
                    Config.appwriteDatabaseId,
                    Config.appwriteCollectionId,
                    slug
                )
                return true;
            } catch (error) {
                console.log("appwrite service ::createPost ::error",error);
                return false;
            }
        }

        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    Config.appwriteDatabaseId,
                    Config.appwriteCollectionId,
                    slug
                )
            } catch (error) {
                console.log("Appwrite service ::createPost ::error",error);
            }

        }
//Active post get 
        async getPosts(queries =[Query.equal("status","active")]){
            try {
                return await this.databases.listDocuments(
                    Config.appwriteDatabaseId,
                    Config.appwriteCollectionId,
                    queries,


                )
            } catch (error) {
                console.log("Appwrite service ::createPost ::error",error);
                return false;
            }
            
        }

        //file upload Service 
        async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    Config.appwriteBucketId,
                    ID.unique(),
                    file
                )
                
            } catch (error) {
                console.log("Appwrite service ::createPost ::error",error);
                return false;
            }
        }

        async deleteFile(fileId){
            try {
                await this.bucket.deleteFile(
                    Config.appwriteBucketId,
                    fileId
                )
                return true;
            } catch (error) {
                console.log("Appwrite service ::createPost ::error",error);
                return false;
            }

        }

        getFilePreview(fileId){
            this.bucket.deleteFile(
                    Config.appwriteBucketId,
                    fileId
                )
        }
}



const service =new service
export default Service