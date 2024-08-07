'use client';

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  title: string;
  image: string;
}

const DisplayCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  

  return (
    <div>
      <AlertDialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          {categories.map((category) => (
            <TableBody key={category.id}>
              <TableRow>
                <TableCell>n° {category.id}</TableCell>
                <TableCell>n° {category.title}</TableCell>
                <TableCell>n° {category.image}</TableCell>
                
                <TableCell>
                  <div className="flex">
                    <Link href={`/dashboard/administrator/client/${encodeURIComponent(category.id)}`}>
                      <img src="/iconWorkPlace/edit.svg" alt="" />
                    </Link>
                    <AlertDialogTrigger asChild style={{ marginLeft: '20px' }}>
                      <img
                        src="/iconWorkPlace/trash-2.svg"
                        alt=""
                        
                      />
                    </AlertDialogTrigger>
                  </div>
                  {showDialog && // selectedCategoryId
                 category.id && (
                    <AlertDialogContent key={category.id}>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Voulez-vous vraiment supprimer cette Catégorie ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Cette action est irréversible, voulez-vous vraiment la supprimer ?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setShowDialog(false)}>Annuler</AlertDialogCancel>
                        <AlertDialogAction>
                          Valider
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </AlertDialog>
    </div>
  );
};

export default DisplayCategory;
