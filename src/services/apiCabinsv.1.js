import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error(error);
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could be deleted");
  }
  return data;
}

export async function createEditeCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(newCabin);
  // create image uniqe name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // add image path to table cabin to image fild in the database
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create / edite caben
  let query = supabase.from("cabins");
  // A) for create cabin -----------------
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  // B) for update cabin
  if (id) {
    query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);
  }
  hasImagePath
    ? ""
    : await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);
  /// uplode the image to the stoarge

  // delete cabin if image are not uploaded
  // if (errorStoarge) {
  //   await supabase.from("cabins").delete().eq("id", data.id);
  //   throw new Error("error cant uplode your image and cabin are not created");
  // }
  // if (error) {
  //   throw new Error("Cabin could be created");
  // }
  // return data;
}

// export async function createCabin(newCabin, id) {
//   // https://cibmbmqspsdtpcpnmavo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
//   // create image uniqe name
//   console.log(newCabin);
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );
//   // add image path to table cabin to image fild in the database
//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   const query = supabase.from("cabins");
//   ///for update cabin
//   if (id)
//     await query
//       .update([{ ...newCabin, image: imagePath }])
//       .eq("id", newCabin.id);
//   ///for create cabin
//   else query.insert([{ ...newCabin, image: imagePath }]);

//   /// uplode the image to the stoarge
//   if (newCabin.image)
//     await query.supabase.storage
//       .from("cabin-images")
//       .upload(imageName, newCabin.image);

//   // delete cabin if image are not uploaded
//   // if (errorStoarge) {
//   //   await supabase.from("cabins").delete().eq("id", data.id);
//   //   throw new Error("error cant uplode your image and cabin are not created");
//   // }
//   // if (error) {
//   //   throw new Error("Cabin could be created");
//   // }
//   // return data;

//   // const { data, error } = await supabase
//   //   .from("cabins")
//   //   .update(cabin)
//   //   .eq("id", cabin.id)
//   //   .select();

//   // if (error) {
//   //   console.log(error);
//   //   throw new Error("Cabin could be deleted");
//   // }
//   // return data;
// }
