import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto  min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="title"
            required
            id="title"
            className="flex-1 "
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">javascript</option>
            <option value="react">React</option>
            <option value="web-development">Web Development</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-400 p-3">
          <FileInput typeof="file" accept="image/*" />
          <Button type="button" gradientDuoTone="purpleToPink" size="sm">
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something......."
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
