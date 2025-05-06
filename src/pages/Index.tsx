
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Book, Award, Briefcase, FileText } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative mx-auto px-4 py-12 text-center text-white">
          <h1 className="mb-2 font-sans text-5xl font-bold tracking-tight">Jane Doe</h1>
          <p className="mb-6 text-xl">Wildlife Conservation Biologist</p>
          <div className="flex justify-center gap-4">
            <Button className="gap-2" variant="default">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            <Button className="gap-2" variant="outline">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About/Summary Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec magna pharetra aliquet. 
                As an aspiring wildlife conservation biologist, I am dedicated to preserving biodiversity through 
                research, education, and conservation efforts.
              </p>
              <p className="text-gray-700">
                Praesent ut turpis ac risus egestas tristique. Integer ac nisl sed magna suscipit aliquam. 
                My goal is to contribute to sustainable ecosystem management and species protection while advancing 
                scientific understanding of wildlife ecology and behavior.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="mb-8 text-center text-3xl font-bold">Resume</h2>
        
        <Tabs defaultValue="education" className="mx-auto max-w-3xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="education" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Experience
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education History</CardTitle>
                <CardDescription>My academic background in biology and conservation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Science in Biology</h3>
                  <p className="text-sm text-gray-500">State University, Expected 2026</p>
                  <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                    Concentration in Wildlife Ecology and Conservation Biology.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Associate of Science</h3>
                  <p className="text-sm text-gray-500">Community College, 2022</p>
                  <p className="mt-2 text-gray-700">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. 
                    Focus on Environmental Sciences and Biology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Work History</CardTitle>
                <CardDescription>My professional experience in conservation and fieldwork</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Research Assistant</h3>
                  <p className="text-sm text-gray-500">University Field Research Station, Summer 2023</p>
                  <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat libero vel magna tempor, 
                    eget varius enim ullamcorper. Assisted with data collection for amphibian population monitoring.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Conservation Volunteer</h3>
                  <p className="text-sm text-gray-500">Wildlife Preservation Society, 2021-Present</p>
                  <p className="mt-2 text-gray-700">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Participated in habitat restoration and public education initiatives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Skills</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                <li>Species Identification & Classification</li>
                <li>Ecological Survey Methodologies</li>
                <li>Laboratory Techniques & Sample Analysis</li>
                <li>Geographic Information Systems (GIS)</li>
                <li>Statistical Analysis & Data Visualization</li>
                <li>Field Research & Specimen Collection</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                <li>Scientific Writing & Communication</li>
                <li>Project Planning & Management</li>
                <li>Collaborative Research</li>
                <li>Critical Thinking & Problem Solving</li>
                <li>Public Education & Outreach</li>
                <li>Environmental Ethics & Stewardship</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="mb-8 text-center text-3xl font-bold">Selected Work</h2>
        
        <Carousel className="mx-auto max-w-4xl">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Wetland Ecosystem Analysis</CardTitle>
                  <CardDescription>Academic Research Project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
                    Conducted research on species diversity in local wetland ecosystems, focusing on amphibian 
                    populations and water quality indicators.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Conservation Policy Review</CardTitle>
                  <CardDescription>Term Paper</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
                    Analyzed the effectiveness of current conservation policies for endangered species 
                    protection and proposed evidence-based improvements.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Migratory Bird Monitoring</CardTitle>
                  <CardDescription>Field Research Project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                    Participated in seasonal bird counts and habitat assessments, contributing data to a 
                    nationwide monitoring program.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Extracurricular and Volunteer Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Extracurricular & Volunteer Work</h2>
        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Campus Ecology Club
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
                Organized campus sustainability initiatives and educational events about local ecosystems 
                and conservation practices.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Habitat Restoration Volunteer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Participated in monthly restoration events at local nature preserves, removing invasive species 
                and planting native vegetation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="mb-8 text-center text-3xl font-bold">Contact Information</h2>
        <div className="mx-auto max-w-lg text-center">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-primary">jane.doe@example.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Professional Profiles</h3>
                  <p className="text-gray-700">ResearchGate: jane-doe</p>
                  <p className="text-gray-700">iNaturalist: jane_doe_biologist</p>
                </div>
                <Button className="mt-4">Send Message</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-300">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Jane Doe | Wildlife Conservation Biology Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
