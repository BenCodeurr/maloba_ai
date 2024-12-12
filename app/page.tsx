'use client';

import { useState, ChangeEvent } from 'react';
import { Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const aiVoices = [
    { value: "voice1", label: "Female Voice 1" },
    { value: "voice2", label: "Male Voice 1" },
    { value: "voice3", label: "Female Voice 2" },
    { value: "voice4", label: "Male Voice 2" },
  ];

  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
  ];

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Maloba</h1>
      
      <Card className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="space-y-4">
          {/* Video Upload Button */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
              id="video-upload"
            />
            <label htmlFor="video-upload" className="cursor-pointer text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-600">
                {selectedFile ? selectedFile.name : "Upload video"}
              </span>
            </label>
          </div>

          {/* Prompt Input */}
          <Input
            placeholder="Enter your prompt here..."
            className="w-full"
          />

          {/* AI Voice Selection */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select AI Voice" />
            </SelectTrigger>
            <SelectContent>
              {aiVoices.map((voice) => (
                <SelectItem key={voice.value} value={voice.value}>
                  {voice.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Language Selection */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Submit Button */}
          <Button className="w-full">
            Generate
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UploadPage;