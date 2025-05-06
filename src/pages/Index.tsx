import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Book, Award, Briefcase, FileText, Leaf, TreeDeciduous, PawPrint, Fish } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-nature-mint/20 to-nature-water/10">
      {/* Hero Section */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-nature-green/60"></div>
        <div className="container relative mx-auto px-4 py-12 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <PawPrint className="h-10 w-10 mr-2" />
            <h1 className="font-sans text-5xl font-bold tracking-tight">Megan Rozelle</h1>
          </div>
          <p className="mb-6 text-xl">Wildlife Conservation Biologist</p>
          <div className="flex justify-center gap-4">
            <Button className="gap-2 bg-nature-leaf hover:bg-nature-green">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
            
          </div>
        </div>
      </section>

      {/* About/Summary Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center mb-8">
            <Leaf className="h-6 w-6 text-nature-green mr-2" />
            <h2 className="text-3xl font-bold text-nature-green">About Me</h2>
          </div>
          <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-700">As an aspiring wildlife conservation biologist, I am dedicated to preserving biodiversity through research, education, and conservation efforts.</p>
              <p className="text-gray-700">My goal is to contribute to sustainable ecosystem management and species protection while advancing scientific understanding of wildlife ecology and behavior.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-nature-mint/20 to-nature-water/20 rounded-lg my-8 mx-4">
        <div className="flex items-center justify-center mb-8">
          <FileText className="h-6 w-6 text-nature-green mr-2" />
          <h2 className="text-3xl font-bold text-nature-green">Resume</h2>
        </div>
        
        <Tabs defaultValue="education" className="mx-auto max-w-3xl">
          <TabsList className="grid w-full grid-cols-2 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="education" className="flex items-center gap-2 data-[state=active]:bg-nature-leaf data-[state=active]:text-white">
              <Book className="h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2 data-[state=active]:bg-nature-leaf data-[state=active]:text-white">
              <Briefcase className="h-4 w-4" />
              Experience
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="education">
            <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
              <CardHeader className="bg-nature-mint/30">
                <CardTitle>Education History</CardTitle>
                <CardDescription>My academic background in biology and conservation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-nature-green">Bachelor of Science in Biology</h3>
                  <p className="text-sm text-gray-500">State University, Expected 2027</p>
                  <p className="mt-2 text-gray-700"> 
                    Concentration in Wildlife Ecology and Conservation Biology.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nature-green">High School Diploma</h3>
                  <p className="text-sm text-gray-500">Clear Brook High School, 2009</p>
                  <p className="mt-2 text-gray-700"> 
                    Focus on Environmental Sciences and Biology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience">
            <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
              <CardHeader className="bg-nature-mint/30">
                <CardTitle>Work History</CardTitle>
                <CardDescription>My professional experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-nature-green">House Cleaner</h3>
                  <p className="text-sm text-gray-500">01/2020 - 04/2025</p>
                  <p className="mt-2 text-gray-700">Cleaning houses both residential and commercial as a team member first, then later as a team leader</p>
                </div>
                <div>
                  
                  
                  
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-8">
          <TreeDeciduous className="h-6 w-6 text-nature-green mr-2" />
          <h2 className="text-3xl font-bold text-nature-green">Skills</h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg overflow-hidden">
            <CardHeader className="bg-nature-leaf/20">
              <CardTitle className="flex items-center">
                <Fish className="h-5 w-5 text-nature-leaf mr-2" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-inside list-disc space-y-2">
                <li>Species Identification & Classification</li>
                
                <li>Laboratory Techniques</li>
                
                <li>Statistical Analysis & Data Visualization</li>
                
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg overflow-hidden">
            <CardHeader className="bg-nature-leaf/20">
              <CardTitle className="flex items-center">
                <PawPrint className="h-5 w-5 text-nature-leaf mr-2" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-inside list-disc space-y-2">
                <li>Scientific Writing & Communication</li>
                
                <li>Collaborative Research</li>
                <li>Critical Thinking & Problem Solving</li>
                <li>Public Education & Outreach</li>
                
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-nature-mint/20 to-nature-water/20 rounded-lg my-8 mx-4">
        <div className="flex items-center justify-center mb-8">
          <Award className="h-6 w-6 text-nature-green mr-2" />
          <h2 className="text-3xl font-bold text-nature-green">Selected Work</h2>
        </div>
        
        <Carousel className="mx-auto max-w-4xl">
          <CarouselContent>
            <CarouselItem>
              <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
                <CardHeader className="bg-nature-water/20">
                  <CardTitle>Professional Wildlife Conservationist</CardTitle>
                  <CardDescription>Post Graduation Aspiration</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700">I hope to join the field of Wildlife Conservation to help preserve and protect the beauty of the natural world we live in</p>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
                
                
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
                
                
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Volunteer Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-8">
          <PawPrint className="h-6 w-6 text-nature-green mr-2" />
          <h2 className="text-3xl font-bold text-nature-green">Volunteer Work</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
            <CardHeader className="bg-nature-mint/30">
              <CardTitle className="flex items-center gap-2">
                <PawPrint className="h-5 w-5 text-nature-green" />
                Volunteer at Three Little Pitties Rescue
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700">Volunteer at a local animal rescue and rehabilitation organization. Helped clean animal pens and feed the animals.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-nature-mint/20 to-nature-water/20 rounded-lg my-8 mx-4">
        <div className="flex items-center justify-center mb-8">
          <Mail className="h-6 w-6 text-nature-green mr-2" />
          <h2 className="text-3xl font-bold text-nature-green">Contact Information</h2>
        </div>
        <div className="mx-auto max-w-lg text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-nature-mint/50 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-nature-green">MeganRozelle09@gmail.com</p>
                </div>
                <div>
                  
                  
                  
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nature-green py-8 text-center text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <PawPrint className="h-5 w-5" />
            <Leaf className="h-5 w-5" />
            <TreeDeciduous className="h-5 w-5" />
          </div>
          <p>&copy; 2025 Megan Rozelle | Wildlife Conservation Biology Portfolio</p>
        </div>
      </footer>
    </div>;
};
export default Index;