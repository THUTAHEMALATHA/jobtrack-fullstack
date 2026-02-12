import { supabase } from "../config/supabase.js";

// CREATE
export const createApplication = async (req, res) => {
  try {
    const { company, role, status } = req.body;

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          company,
          role,
          status,
          user_id: req.user.id
        }
      ])
      .select();

    if (error) return res.status(500).json({ error });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
export const getApplications = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .eq("user_id", req.user.id);

    if (error) return res.status(500).json({ error });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from("applications")
      .update({ status })
      .eq("id", id)
      .eq("user_id", req.user.id)
      .select();

    if (error) return res.status(500).json({ error });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("applications")
      .delete()
      .eq("id", id)
      .eq("user_id", req.user.id);

    if (error) return res.status(500).json({ error });

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
